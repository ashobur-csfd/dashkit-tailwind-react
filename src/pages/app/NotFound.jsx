import loti404 from '@/assets/images/loti/loti-404.svg'
import lotiDark404 from '@/assets/images/loti/loti-404-dark.svg'
import Button from '../../components/ui/Button'

export default function NotFound(){
    return(
        <>
        <div className="main-content m-4 h-full">
            <div className="card min-h-[calc(100vh_-_32px)] flex-center">
                <div className="flex-center flex-col gap-10 text-center">
                    <div>
                        <img src={loti404} alt="loti" className="group-data-[theme-mode=dark]:hidden"/>
                        <img src={lotiDark404} alt="loti" className="group-data-[theme-mode=light]:hidden"/>
                    </div>
                    <h3 className="text-2xl sm:text-[42px] leading-[1.23] font-semibold text-heading">
                        Ooops... 404!
                    </h3>
                    <p className="font-spline_sans text-gray-900 dark:text-dark-text">The page you're trying to access doesn't seem to exist.</p>
                    <Button link={'/'} text={'Back To Home'} className="btn b-solid btn-primary-solid btn-lg" />
                </div>
            </div>
        </div>
        </>
    )
}