import Head from "next/head";

export default function Myheader({children, title = 'Componente Recetas'}){

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="componente recetas - Diego Ruiz Ponzio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>🍽️ Componente Recetas🧾</header>
            <main>{children}</main>
            <style jsx>{`
            
                header{
                    padding: 20px;
                }

            `}</style>
        </>
    )

}