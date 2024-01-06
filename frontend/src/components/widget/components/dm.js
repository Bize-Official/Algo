
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function DirectMessage() {
    const [value, setValue] = useState('');

    return (
        <>
            {/* Bootstrap from-control with a primeReact button */}
            <form action="/action_page.php">
            <div className="mb-3 mt-3">
            <label htmlFor="comment">Send message to *name*</label>
            <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Hey *name*! Your Biz looks very interesting..." ></textarea>
            </div>
            </form>
            <Button label="Send" type="submit" icon="pi pi-send" />
        </>
        
    )
}