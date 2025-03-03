import { useState } from 'react';
import lotiAuth from '@/assets/images/loti/loti-auth.svg';
import lotiDarkAuth from '@/assets/images/loti/loti-auth.svg';
import Button from '../../../components/ui/Button';

export default function TwoStep() {
  const [digits, setDigits] = useState(['', '', '', '']);

  const handleInputChange = (index, event) => {
    const newDigits = [...digits];
    newDigits[index] = event.target.value;
    setDigits(newDigits);

    if (event.target.value.length === 1 && index < 3) {
      document.getElementById(`digit${index + 2}-input`).focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && digits[index] === '' && index > 0) {
      document.getElementById(`digit${index}-input`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Verification code:', digits.join(''));
  };

  return (
    <div className="main-content m-4">
      <div className="grid grid-cols-12 gap-y-7 sm:gap-7 card px-4 sm:px-10 2xl:px-[70px] py-15 lg:items-center lg:min-h-[calc(100vh_-_32px)]">
        {/* Start Overview Area */}
        <div className="col-span-full lg:col-span-6">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div className="hidden sm:block">
              <img src={lotiAuth} alt="loti" className="group-data-[theme-mode=dark]:hidden" />
              <img src={lotiDarkAuth} alt="loti" className="group-data-[theme-mode=light]:hidden" />
            </div>
            <div>
              <h3 className="text-xl md:text-[28px] leading-none font-semibold text-heading">
                Welcome back!
              </h3>
              <p className="font-medium text-gray-500 dark:text-dark-text mt-4 px-[10%]">
                Whether you're launching a stunning online store or optimizing your object-oriented
              </p>
            </div>
          </div>
        </div>
        {/* End Overview Area */}

        {/* Start Form Area */}
        <div className="col-span-full lg:col-span-6 w-full lg:max-w-[600px]">
          <div className="border border-form dark:border-dark-border p-5 md:p-10 rounded-20 md:rounded-30">
            <h3 className="text-xl md:text-[28px] leading-none font-semibold text-heading">
              2 - Step Verification
            </h3>
            <p className="font-medium text-gray-500 dark:text-dark-text mt-4">
              We sent a code, check your email now.
            </p>
            <form onSubmit={handleSubmit} className="leading-none mt-8">
              <div className="mb-7">
                <div className="flex gap-5">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="grow-0">
                      <label className="sr-only">Digit {index + 1}</label>
                      <input
                        type="text"
                        id={`digit${index + 1}-input`}
                        autoComplete="off"
                        className="form-input rounded-md text-xl font-semibold text-gray-500 dark:text-dark-text !py-4 text-center focus:outline-primary-300"
                        value={digits[index]}
                        onChange={(e) => handleInputChange(index, e)}
                        onKeyDown={(e) => handleBackspace(index, e)}
                        maxLength="1"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Submit Button */}
              <Button type="submit" text={'Verify Account'} className="btn b-solid btn-primary-solid w-full" />
            </form>
            <div className="text-gray-900 dark:text-dark-text font-medium leading-none mt-5">
              You didn’t get the code?
              <Button link={'#'} text={' Send again'} className="text-primary-500 font-semibold" />
            </div>
          </div>
        </div>
        {/* End Form Area */}
      </div>
    </div>
  );
}
