import React from "react";
import { Link } from 'gatsby'

export default () => (
    <div style={{ margin: '40px' }}>
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
        <Link to='/'>Back</Link>
    </div>
);