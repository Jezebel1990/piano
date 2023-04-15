import React from 'react';
import '../src/styles/App.scss';
import './Piano';

function App() {
  return (
<main>
<section className='piano'>
<div className='keys-unit'>

<div className='piano-key' data-key="c2">
  <div className="black">
       C2# <br/> [
  </div>
  <span>C2 <br/>A
  </span>
</div>
<div className='piano-key' data-key="d2">
<div className="black">
     D2# <br/> 1
</div>
<span>D2 <br/>S
</span>
</div>
<div className='piano-key'data-key="e2">
<span>E2 <br/>D
</span>
</div>
<div className='piano-key'data-key="f2">
<div className="black">
    F2# <br/> 2
</div>
<span>F2 <br/>F
</span>
</div>
<div className='piano-key' data-key="g2">
<div className="black">
  G2# <br/> 3
</div>
<span>G2 <br/> G

</span>
</div>
<div className='piano-key'data-key="a2">
<div className="black">
  A2# <br/> 4
</div>
<span>A2 <br/> H

</span>
</div>
<div className='piano-key' data-key="b2">
<span>B2 <br/> J

</span>
</div>

<div className='piano-key'data-key="c3">
  <div className="black">
    C3# <br/> 5
  </div>
  <span>C3 <br/> K

  </span>
</div>
<div className='piano-key'data-key="d3">
<div className="black">
  D3# <br/> 6
</div>
<span>D3 <br/> L

</span>
</div>
<div className='piano-key' data-key="e3">
<span>E3 <br/> Ç
</span>
</div>
<div className='piano-key'data-key="f3">
<div className="black">
  F3# <br/> 7
</div>
<span>F3 <br/> ]

</span>
</div>
<div className='piano-key'data-key="g3">
<div className="black">
  G3# <br/> 8
</div>
<span>G3 <br/> Q

</span>
</div>
<div className='piano-key' data-key="a3">
<div className="black">
  A3# <br/> 9
</div>
<span>A3 <br/> W

</span>
</div>
<div className='piano-key'data-key="b3">
<span>B3 <br/> E

</span>
</div>

<div className='piano-key'data-key="c4">
  <div className="black">
    C4# <br/> 0
  </div>
  <span>C4 <br/> R

  </span>
</div>
<div className='piano-key' data-key="d4">
<div className="black">
  D4# <br/> Z
</div>
<span>D4 <br/> T

</span>
</div>
<div className='piano-key'data-key="e4">
<span>E4 <br/> Y
  
</span>
</div>
<div className='piano-key'data-key="f4">
<div className="black">
  F4# <br/> X
</div>
<span>F4 <br/> U

</span>

</div>
<div className='piano-key'data-key="g4">
<div className="black">
  G4# <br/> C
</div>
<span>G4 <br/> I

</span>
</div>
<div className='piano-key'data-key="a4">
<div className="black">
  #A4# <br/> V
</div>
<span>A4 <br/> O

</span>
</div>
<div className='piano-key'data-key="b4">
<span>B4 <br/> P

</span>
</div>

  </div>
</section>
</main>
  );   
};

export default App;
