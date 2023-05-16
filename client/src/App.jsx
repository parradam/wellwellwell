import Header from './components/Header'
import Nav from './components/Nav'
import Heatmap from './components/Heatmap'

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-tr from-white to-blue-200">
                <div>
                    <Header />
                    <div className="container mx-auto pt-10">
                        <div className="flex flex-col w-10/12 bg-slate-50 mx-auto rounded-lg overflow-hidden shadow-lg">
                            <div className="flex p-1">
                                <Nav />
                                <div>
                                    <div className="p-6 flex flex-col gap-3">
                                        <div id="welcome-text">
                                            <h1 className="text-3xl font-bold">
                                                Dashboard
                                            </h1>
                                            <p>
                                                Welcome back,{' '}
                                                <span className="font-semibold text-blue-700">
                                                    Adam
                                                </span>
                                                . Here is your dashboard for
                                                today.
                                            </p>
                                        </div>
                                        <Heatmap />
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Tortor id
                                            aliquet lectus proin nibh nisl
                                            condimentum. Morbi tincidunt ornare
                                            massa eget egestas purus viverra.
                                            Felis imperdiet proin fermentum leo
                                            vel orci porta. Purus faucibus
                                            ornare suspendisse sed nisi lacus.
                                            Et malesuada fames ac turpis egestas
                                            integer. Sapien nec sagittis aliquam
                                            malesuada bibendum arcu vitae
                                            elementum curabitur. Aenean sed
                                            adipiscing diam donec adipiscing.
                                            Tellus at urna condimentum mattis
                                            pellentesque id. Pellentesque nec
                                            nam aliquam sem.
                                        </p>
                                        <p>
                                            Eu turpis egestas pretium aenean
                                            pharetra magna ac placerat
                                            vestibulum. Gravida dictum fusce ut
                                            placerat orci nulla pellentesque.
                                            Iaculis at erat pellentesque
                                            adipiscing. Cursus euismod quis
                                            viverra nibh cras pulvinar mattis
                                            nunc sed. Eget magna fermentum
                                            iaculis eu non diam phasellus. Nunc
                                            sed velit dignissim sodales ut eu
                                            sem integer vitae. Fames ac turpis
                                            egestas maecenas pharetra convallis
                                            posuere morbi leo. Pellentesque elit
                                            ullamcorper dignissim cras.
                                            Adipiscing elit duis tristique
                                            sollicitudin nibh. Vitae proin
                                            sagittis nisl rhoncus mattis rhoncus
                                            urna neque. Elit pellentesque
                                            habitant morbi tristique senectus et
                                            netus et malesuada. Cras semper
                                            auctor neque vitae tempus quam
                                            pellentesque nec nam.
                                        </p>
                                        <p>
                                            Aliquet eget sit amet tellus cras
                                            adipiscing enim eu. Massa vitae
                                            tortor condimentum lacinia.
                                            Convallis a cras semper auctor neque
                                            vitae tempus. Mauris pellentesque
                                            pulvinar pellentesque habitant morbi
                                            tristique senectus. Tempus imperdiet
                                            nulla malesuada pellentesque. Id
                                            interdum velit laoreet id donec.
                                            Sodales neque sodales ut etiam sit
                                            amet nisl purus in. Semper eget duis
                                            at tellus at. Adipiscing bibendum
                                            est ultricies integer quis auctor
                                            elit sed vulputate. Arcu bibendum at
                                            varius vel. Cras fermentum odio eu
                                            feugiat pretium nibh. Cum sociis
                                            natoque penatibus et magnis.
                                            Ullamcorper sit amet risus nullam
                                            eget felis eget. Praesent elementum
                                            facilisis leo vel fringilla. Lectus
                                            quam id leo in vitae turpis massa.
                                            Malesuada proin libero nunc
                                            consequat interdum varius.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
