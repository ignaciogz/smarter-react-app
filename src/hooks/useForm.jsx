import { useRef } from 'react'

const useForm = (setDataContainer) => {
  const formRef = useRef(null);

	const getDataObject = (formData) => {
		let dataObject = {};

		for (const key of formData.keys()) {
			dataObject[key] = formData.get(key);
		}

		return dataObject;
	}

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
		const data = getDataObject(formData);
    setDataContainer(data);
  }

  return { formRef, handleSubmit };
}

export default useForm;