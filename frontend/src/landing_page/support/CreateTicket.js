import TicketDropdown from "./TicketDropdown"

export default function CreateTicket() {
    return(
        < >
            <div style={{marginBottom:"100px"}}>
                <h3 className="text-center my-5">To create a ticket, select a relevant topic</h3>
                <TicketDropdown iconClass="fa-solid fa-plus" title="Account Opening" collapseId="multiCollapse1" li1="Resident individual" li2="Minor" li3="Non Resident Indian (NRI)" li4="Company, Partnership, HUF and LLP" li5="Glossary"/>
                <TicketDropdown iconClass="fa-regular fa-circle-user" title="Your Zerodha Account" collapseId="multiCollapse2" li1="Your Profile" li2="Account modification" li3="Client Master Report (CMR) and Depository Participant (DP)" li4="Nomination" li5="Transfer and conversion of securities"/>
                <TicketDropdown iconClass="fa-brands fa-flutter" title="Kite" collapseId="multiCollapse3" li1="IPO" li2="Trading FAQs" li3="Margin Trading Facility (MTF) and Margins" li4="Charts and orders" li5="General"/>
                <TicketDropdown iconClass="fa-solid fa-indian-rupee-sign" title="Funds" collapseId="multiCollapse4" li1="Add money" li2="Withdraw money" li3="Add bank accounts" li4="eMandates" li5="Glossary"/>
                <TicketDropdown iconClass="fa-solid fa-circle-notch" title="Console" collapseId="multiCollapse5" li1="Portfolio" li2="Corporate actions" li3="Funds statement" li4="Reports" li5="Profile"/>
                <TicketDropdown iconClass="fa-solid fa-coins" title="Coin" collapseId="multiCollapse6" li1="Mutual funds" li2="National Pension Scheme (NPS)" li3="Fixed Deposit (FD)" li4="Features on Coin" li5="Payments and Orders"/>
            </div>
        </>
    )
}