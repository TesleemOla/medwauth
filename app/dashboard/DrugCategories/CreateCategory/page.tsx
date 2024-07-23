import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const CreateCategory = () => {
    const { pending } = useFormStatus()
 
    // const [useFormState()

    function creator(formData: { get: (arg0: string) => any }){
        const category = formData.get('category')
        const description = formData.get('description')

        console.log(category, description)
    }

  return (
    <div>
          <form action={creator}>
            <div>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" id="category" placeholder="Category Name"/>
            </div>        
              <div>
                  <label htmlFor="description">Description</label>
                  <input type="text" name="description" id="description" placeholder="Description" />
              </div>
              <button aria-disabled={pending} type="submit">
                { pending? "Creating...": "Create" }
              </button>
          </form>
    
    </div>
  )
}

export default CreateCategory