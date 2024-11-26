import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function PlayerInput({handlePlayerSave}) {
  const [open, setOpen] = useState(true)
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if(playerOne.trim() === '' || playerTwo.trim() === '') {
          alert('Please enter playernames')
          return
        }
        
        handlePlayerSave(playerOne, playerTwo)
        setOpen(false)
    }

  return (
    <Dialog open={open} onClose={() => {}} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="mx-6 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900 mx-6">
                    Enter player names
                  </DialogTitle>
                  <div className="m-6">
                    <form className='flex flex-col gap-4 w-full my-6'
                        onSubmit={handleSubmit}>
                          
                        <div className='flex flex-col'>
                            <label className='font-semibold text-gray-600 text-sm mb-1'>Player 1:</label>
                            <input 
                                className='drop-shadow-sm p-2 border rounded'
                                type='text'
                                placeholder='e.g. Spongebob'
                                onChange={(e) => setPlayerOne(e.target.value)}
                                value={playerOne}
                            /> 
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-gray-600 text-sm mb-1'>Player 2:</label>
                            <input 
                                className='drop-shadow-sm p-2 border rounded'
                                type='text'
                                placeholder='e.g. Patrick'
                                onChange={(e) => setPlayerTwo(e.target.value)}
                                value={playerTwo}
                            /> 
                        </div>
                        
                        <button
                          type="submit"
                          className="mt-3 py-2 px-6 inline-flex font-bold justify-center bg-blue-800 hover:outline outline-2 outline-blue-400 transition-all text-white self-center rounded ms-auto"
                        >
                          Save
                        </button>
                        
                    </form>
                  </div>
                </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

