import React from 'react';
import './QNA.css'

const QNA = () => {
    return (
        <div className='qna'>
            <h2 className='qna-titel'>Question and Answer</h2>
            <h3>How to react work?</h3>
            <p>It determines the logical structure of documents and the way to access and manipulate a document. So, to speed it up, the response applies a virtual DOM which is a DOM tree representation in JavaScript. So when it has to read or write to the DOM, it will use its virtual representation. Virtual DOM will then try to find the most effective way to update the browser's DOM. Unlike browser DOM components, responsive components are simpler objects and cheaper to create. Feedback DOM takes care to update the DOM to match the response components. This is because JavaScript is very fast and it is worth keeping a DOM tree in it to speed up its manipulation. Although Feedback was intended to be used in browsers, due to its design it can be used on servers with Node.js.</p>

            <h3>Difference between props vs state?</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Props</th>
                        <th>States</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Props cannot be modified.</td>
                        <td>States can be modified using this, setState()</td>
                        </tr>
                        <tr>
                        <td>Props can be used in class and function components.</td>
                        <td>States can be used only in class components.</td>
                        </tr>
                        <tr>
                        <td>Props are read-only.</td>
                        <td>State changes can be asynchronous.</td>
                        </tr>
                        <tr>
                        <td>Props are passed outside a component.</td>
                        <td>States are passed inside a component.</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default QNA;