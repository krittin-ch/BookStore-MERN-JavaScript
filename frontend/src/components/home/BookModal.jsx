import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai'
import PropTypes from 'prop-types';

const BookModal = ({ book, onClose }) => {
    return (
        <div
        className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={ onClose }
        >
            <div onClick={(event) => event.stopPropagation()}
            className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineEdit
                className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                onClick={ onClose }
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
                    { book.publishYear }
                </h2>
                <h4 className="my-2 text-gray-500">{ book._id }</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className="text-red-300" />
                    <h2 className="my-1">{ book.title }</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className="text-red-300" />
                    <h2 className="my-1">{ book.author }</h2>
                </div>
                <p className="mt-4">Description</p>
                <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum vitae sem aliquet pharetra. Curabitur ut lacus vitae justo elementum viverra. Nulla facilisi. Sed at nisi pellentesque, bibendum ligula id, tempus metus. Donec quis massa tellus. Nullam tincidunt.
                </p>
            </div>
        </div>
    )
}

BookModal.propTypes = {
    book: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            publishYear: PropTypes.number.isRequired
        })
    ).isRequired
}

export default BookModal;