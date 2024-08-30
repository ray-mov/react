import { updateProfile } from "../_lib/actions"


function UserProfileForm() {
  return (

    <form className="bg-gray-100 w-full py-5 px-10" action={updateProfile}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={"name"}
          // value={formData.name}
          // onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={"xx@gmail.com"}
          // value={formData.name}
          // onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

    </form>

  )
}

export default UserProfileForm