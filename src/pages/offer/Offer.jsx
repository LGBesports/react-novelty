import React from 'react'
import Advantages from '../../comps/Advantages/Advantages'
import Quad from '../../comps/Quad/Quad'
import Types from '../../comps/Types/Types'
import Form from '../../comps/Form/Form';

function Offer() {
    return (
        <main className="body offer">
            <Advantages name={`Какие перевозки\nмы осуществляем?`} />
            <Quad />
            <Types />
            <Form />
        </main>
    )
}

export default Offer