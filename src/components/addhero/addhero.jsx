import React from 'react';

export default class AddHero extends React.Component {
    render() {
        return(
            <>
                <section className="section add">
                    <h1>Add New Hero</h1>
                    <div className="form__container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter heroes'name"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Description</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter heroes' description"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Image URL</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter Image URL"></input>
                            </div>
                            <fieldset className="form-group">
                                <div className="row sex">
                                    <legend className="col-form-label col-sm-2 pt-0">Sex</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check form-check-inline ">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id="gridRadios1" value="option1" checked></input>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Female
                                                </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id="gridRadios2" value="option2"></input>
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Male
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Add hero</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}