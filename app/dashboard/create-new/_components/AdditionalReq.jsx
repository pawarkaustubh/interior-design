import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div className="mt-5">
      <label className="block text-gray-500 font-medium text-lg">
        Add Additional Requirements (Optional)
      </label>
      <Textarea
        className="mt-3 w-full h-32 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2 text-gray-700 placeholder-gray-400"
        placeholder="Write your additional requirements here..."
        onChange={(e) => additionalRequirementInput(e.target.value)}
      />
    </div>
    
  )
}

export default AdditionalReq


// <div className="mt-5">
    //   <label className="text-gray-400">Add Additional Requirements (Optional)</label>
    //   <Textarea className="mt-3" onChange = {(e) => additionalRequirementInput(e.target.value)}/>
    // </div>