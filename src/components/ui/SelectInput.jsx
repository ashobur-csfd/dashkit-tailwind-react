export default function SelectInput({labelText, basic, advanced, multiAdvance, options, value}){
    return(
        <>
            {basic && <label className="form-label">{labelText}</label>}
            <select className={`form-input form-select w-full ${basic && 'h-11' || advanced && 'singleSelect' || multiAdvance && 'multiSelect'}`}>
                {options?.map((option, idx) => (
                    <option key={idx} value={option?.value} data-display="Selected Option">{option?.option}</option>
                ))}
            </select>
        </>
    )
}