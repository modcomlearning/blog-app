import useConference from "./useConference";

const Conference = () => {
    //here we use our custom HOOK   useConference
    const { data : conferences, loading, error } =
        useConference("http://musau.pythonanywhere.com/getconference_room")
    
    return (
        <div className="conf">
            <h2>Available Rooms</h2>
            <div className="rooms">
                 {loading && <div>Loading ... </div>}
                 {error && <div> Error occured. Try Later </div>}
                    {conferences && conferences.map((conference) => (
                    <div className="single" key={conference.room_id}>
                        <h3>{conference.room_name}</h3>
                        <img src={conference.image_url} alt="" width="100"/>    
                        <p> {conference.room_desc}</p>
                        <b>KES { conference.cost}</b>
                        <hr />
                        <br />
                     </div>    
                ))}
            </div>
        </div>  
      );
}
 
export default Conference;