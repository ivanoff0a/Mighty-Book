import React from 'react';
import Routes from './../../constants/Routes';


export default class AddHero extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.gender = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.props.addHeroCard) {
            this.props.addHeroCard({
                name: this.nameTextField.value,
                desc: this.descTextField.value,
                pic: this.imageURLTextField.value,
                gender: this.gender
            });
        }
        this.props.history.push(Routes.HERO_LIST);
    }


    render() {
        return(
            <>
                <section className="section add">
                    <h2>Add New Hero</h2>
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
                                                   value="female"
                                                />
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
                                                   value="male"/>
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Male
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <button onClick={(event) => { this.onSubmit(event) }}
                                    type="submit"
                                    className="btn btn-primary">Add hero</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}