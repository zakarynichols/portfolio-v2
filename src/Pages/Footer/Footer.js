import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer
                style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: '0'
                }}
                className="mt-4 footer">
                Made by Zak Nichols
            </footer>
        </Fragment>
    );
};

export default Footer;