import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Welcome to Monstres’ Shopping Site! 👾
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-4">
                    Looking for the perfect gift? Look no further! We have something for everyone, even those with little knowledge of blockchain technology. In just three easy steps, you can purchase and own a digital artwork or cryptocurrency.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                    First, choose from our selection of Christmas postcards or customize your own. Next, make your payment using non-crypto options like Apple Pay and Google Pay. Finally, sit back and relax while we wrap and mail your gift to you within 3-12 business days.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                    Don't miss out on this unique opportunity to own a piece of the blockchain. Shop now and give the gift of digital assets!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center item-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
            </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}