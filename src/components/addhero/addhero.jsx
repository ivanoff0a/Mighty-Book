import React from 'react';

export default class AddHero extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        let formResult = {
                name: this.nameTextField.value,
                desc: this.descTextField.value,
                imageURL: this.imageURLTextField.value,
                isMan: this.isMan
            };
        console.log(formResult);
        event.preventDefault();
    }

    onChange(event) {
        this.isMan = event.target.value === 'Male';
    }


    render() {
        this.isMan = false;
        return(
            <>
                <section className="section add">
                    <h1>Add New Hero</h1>
                    <div className="form__container">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input ref={(name) => this.nameTextField = name}
                                       type="text"
                                       placeholder="Enter heroes'name"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Description</label>
                                <input ref={(desc) => this.descTextField = desc}
                                       type="text"
                                       placeholder="Enter heroes' description"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Image URL</label>
                                <input ref={(imageURL) => this.imageURLTextField = imageURL}
                                       type="text"
                                       placeholder="Enter Image URL"
                                       className="form-control"/>
                            </div>
                            <fieldset className="form-group">
                                <div className="row sex">
                                    <legend className="col-form-label col-sm-2 pt-0">Sex</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check form-check-inline ">
                                            <input className="form-check-input"
                                                   onChange={this.onChange}
                                                   type="radio"
                                                   name="gridRadios"
                                                   id="gridRadios1"
                                                   value="Female"
                                                   checked/>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Female
                                                </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input"
                                                   onChange={this.onChange}
                                                   type="radio"
                                                   name="gridRadios"
                                                   id="gridRadios2"
                                                   value="Male"/>
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