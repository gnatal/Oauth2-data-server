This project is a stardart Oauth2 implementation (Just the data server)
It's a working in progress the auth server can be found here <a href="https://github.com/gnatal/oauth2">auth server</a>

<p>

    Some notes before you continue, I'm using the same DB to the auth server and the data server
    so you the ormconfig.json must have the same DB. Also to run this project you need to run the auth server
    in another port (recomend using 3000 to auth and 3005 to this one)

</p>

<br />
<h1> Features </h1>
<ol>
    <li>Validade requests</li>
    <li>Authentication middleware</li>
    <li>Authorization middleware</li>
    <li> A basic CRUD </li>
</ol>
<p> you must create an .env file to and set the following properties 
    <br /> PORT=your_port
</p>

<h2>To do </h2>
<ol>
    <li> [] Create user</li>
    <li> [] Authentication middleware</li>
    <li> [] Authorization middleware</li>
    <li> [] A basic CRUD </li>
</ol>

<h2> Demonstration apps</h2>

<ol>
    <li> Oauth server <a href="https://github.com/gnatal/oauth2"> click here! </a> as your authenticator and authorization</li>
    <li> SPA usage <a href="https://github.com/gnatal/oauth2-spa-demo"> click here! </a>(as your main app)</li>
    <li> Back-end <a href="https://github.com/gnatal/Oauth2-data-server"> click here! </a>Using as a data server</li>
    <li> Back-end <a href=""> click here! </a>usage (as a third party app)</li>
</ol>


<h1> License </h1>

MIT License

Copyright (c) 2021 Natal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.