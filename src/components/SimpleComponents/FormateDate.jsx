import { useEffect, useState } from "react";

const FormateDate = () => {
    const [dateInput, setDateInput] = useState('');
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const formatted = currentDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
        setDateInput(formatted);

        const formattedDate = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
        setFormattedDate(formattedDate)
    }, []);

    return {formattedDate, dateInput};
}

export default FormateDate;
