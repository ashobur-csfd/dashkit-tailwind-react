import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

export default function MultiStackCalendar(){

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
      }
    return(
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card p-0 overflow-hidden">
                <div className="flex flex-col gap-2 sm:flex-center-between sm:flex-row px-4 py-5 sm:p-7 bg-gray-200/30 dark:bg-dark-card-two">
                    <div>
                        <h6 className="card-title">Calendar</h6>
                    </div>
                    <select className="form-input form-select">
                        <option value="last-week">Last Week</option>
                        <option value="last-two-week">Last Two Week</option>
                        <option value="last-month">Last Month</option>
                        <option value="all">all notification</option>
                    </select>
                </div>
                {/* Start Multimonth Calendar */}
                <div className="p-4 sm:p-7">
                    <button type="button" className="hidden" id="event-button" data-modal-target="event-modal" data-modal-toggle="event-modal"></button>
                    <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    dateClick={handleDateClick}
                    />
                </div>
                {/* End Multimonth Calendar */}
            </div>
        </div>
        </>
    )
}