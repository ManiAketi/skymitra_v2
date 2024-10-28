// app/api/service-providers/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const service = searchParams.get('service');
    const state = searchParams.get('state');
    const district = searchParams.get('district');

    // Build the where clause based on the filters
    const whereClause: Prisma.ServiceProviderWhereInput = {};

    if (state) {
      whereClause.state = state;
    }

    if (district) {
      whereClause.district = district;
    }

    if (service) {
      whereClause.services = {
        some: {
          name: service,
        },
      };
    }

    // Fetch service providers matching the filters
    const serviceProviders = await prisma.serviceProvider.findMany({
      where: whereClause,
      include: {
        services: {
          select: {
            name: true,
          },
        },
        images: {
          select: {
            url: true,
          },
          take: 1, // Get the first image
        },
      },
    });

    // Map the data to match the expected structure
    const providers = serviceProviders.map((provider) => ({
      id: provider.id,
      name: provider.name,
      rating: 4.5, // Default value
      state: provider.state,
      district: provider.district,
      services: provider.services.map((s) => s.name),
      phoneNumber: provider.phoneNumber,
      pricePerHour: 1000, // Default value
      responseTime: '1 hour', // Default value
      recentEnquiries: 10, // Default value
      imageUrl: provider.images[0]?.url || null,
    }));

    return NextResponse.json(providers, { status: 200 });
  } catch (error) {
    console.error('Error fetching service providers:', error);
    return NextResponse.json(
      { message: 'Error fetching service providers' },
      { status: 500 }
    );
  }
}
