import lotiSuccess from '@/assets/images/loti/loti-success-confirmation.svg'
import lotiDarkSuccess from '@/assets/images/loti/loti-success-confirmation.svg'
import Button from '../../components/ui/Button'

export default function SuccessConfirmation(){
    return(
        <>
        <div className="main-content m-4 h-full">
            <div className="card min-h-[calc(100vh_-_32px)] flex-center">
                <div className="flex-center flex-col gap-10 text-center">
                    <div>
                        <img src={lotiSuccess} alt="loti" className="group-data-[theme-mode=dark]:hidden"/>
                        <img src={lotiDarkSuccess} alt="loti" className="group-data-[theme-mode=light]:hidden"/>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-[42px] leading-[1.23] font-semibold text-heading">
                            Thank You! Congratulations
                        </h3>
                        <p className="font-spline_sans text-gray-900 dark:text-dark-text my-4">
                            Congratulations! Your account has been successfully created. learn best think in the world.
                        </p>
                        <Button link={'/'} text="Back To Home" className="btn b-solid btn-primary-solid btn-lg" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}