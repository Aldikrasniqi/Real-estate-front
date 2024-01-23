import React from 'react';
import { useAlertContext } from '../context/alert.context';
import { useRef } from 'react';
import { Dialog } from '@headlessui/react';

const Alert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef(null);
  const isSuccess = type === 'success';

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      initialFocus={cancelRef}
      className="fixed inset-0 overflow-y-auto"
    >
      <Dialog.Panel className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center ">
        {/* Background overlay */}
        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />

        {/* Actual modal */}
        <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full md:w-96 lg:w-500 mx-auto">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {isSuccess ? 'All good!' : 'Oops!'}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              {message}
            </Dialog.Description>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {
                onClose();
                if (isSuccess) {
                  window.location.reload(); // Reload the page on success
                }
              }}
            >
              OK
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Alert;
