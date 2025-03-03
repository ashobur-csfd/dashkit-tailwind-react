import lotiMaintain from '@/assets/images/loti/loti-maintainence.svg'
import lotiMaintainDark from '@/assets/images/loti/loti-maintainence-dark.svg'
import Button from '../../components/ui/Button'

export default function Maintenance(){
    return(
        <>
        <div className="main-content m-4 h-full">
            <div className="card min-h-[calc(100vh_-_32px)] flex-center">
                <div className="flex-center flex-col gap-10 text-center">
                    <div>
                        <img src={lotiMaintain} alt="loti" className="group-data-[theme-mode=dark]:hidden"/>
                        <img src={lotiMaintainDark} alt="loti" className="group-data-[theme-mode=light]:hidden"/>
                    </div>
                    <h3 className="text-2xl sm:text-[42px] leading-[1.23] font-semibold text-heading">
                        The Site is Currently<br/>
                        Undergoing Maintenance
                    </h3>
                    <Button link={'/'} text={'Back To Home'} className="btn b-solid btn-primary-solid btn-lg" />
                </div>
            </div>
        </div>
        </>
    )
}