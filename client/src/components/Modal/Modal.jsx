const Modal = ({ children, modalData, setModalData }) => {
    if (modalData)
        return (
            children && (
                <>
                    <div className="fixed inset-0 h-screen flex justify-center items-center bg-gray-600/50">
                        <div className="z-50 flex flex-col sm:m-10 m-4 sm:p-6 p-5 rounded-lg bg-white relative shadow-lg">
                            {children}
                            <div
                                className="absolute flex justify-center align-middle w-5 h-5 top-0 right-1 text-xl cursor-pointer"
                                onClick={() => {
                                    setModalData(null)
                                }}
                            >
                                &#x2715;
                            </div>
                        </div>
                    </div>
                </>
            )
        )
}

export default Modal
