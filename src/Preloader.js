function Preloader() {
    return (
      <div>
        <h3 className = "search">Search... Please wait</h3>
        <div className = "preloader-wrapper big active" >
            <div className = "spinner-layer spinner-yellow-only" >
                <div className = "circle-clipper left" >
                    <div className = "circle" > </div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
      </div>
    );
}

export { Preloader };
