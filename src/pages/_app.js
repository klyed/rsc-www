require('isomorphic-fetch');

import '../../styles/globals.css';
import SessionContextProvider from '../contexts/session';

function App({ Component, pageProps, props }) {
    return (
        <>
            <SessionContextProvider session={props.session}>
                <Component {...pageProps} />
            </SessionContextProvider>
        </>
    );
}

App.getInitialProps = async function ({ ctx: { req } }) {
    const response = await fetch(`${process.env.url}/api/session`, {
        headers: { cookie: req ? req.cookie : undefined }
    });
    console.log(response)
    if (response.ok == true) {
        const session = await response.json();
        return { props: { session } };
    }

    return { notFound: true };
};

export default App;
