import {HiCheckCircle} from 'react-icons/hi2'

const Heading = ({ text }: { text: string }) => (
  <h3 className="text-lg text-gray-600 flex gap-4 items-center">
    <HiCheckCircle className="h-6 w-6" />
    <span>{text}</span>
  </h3>
);

export default Heading