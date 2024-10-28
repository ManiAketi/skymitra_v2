import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type ServiceType = {
  id: string
  name: string
}

type EditServiceModalProps = {
  service: ServiceType
  onClose: () => void
  onSave: (serviceData: ServiceType) => void
}

export default function EditServiceModal({ service, onClose, onSave }: EditServiceModalProps) {
  const [name, setName] = useState(service.name)

  const handleSubmit = () => {
    if (name.trim() === '') {
      alert('Please enter a service name')
      return
    }
    onSave({ ...service, name })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Service</h2>
        <div className="mb-4">
          <Label htmlFor="service-name">Service Name</Label>
          <Input
            id="service-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  )
}