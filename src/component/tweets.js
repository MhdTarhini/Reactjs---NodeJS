import React from "react";

function Tweets (){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Tweets</h1>
                <form method="POST" action="/addTweet">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="tweetInput" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {/* {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>{item.user.fullname} ({item.user.username}): {item.tweet}</i>
                        </div>
                    </div>       
                ))
                } */}
            </div>
        </section>
    )
}

export default Tweets