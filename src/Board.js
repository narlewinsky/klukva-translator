import './Board.css';
import React, { Component } from 'react';
import latinize from 'klukva-core';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CopyIcon from './media/copy.svg';
import ExportIcon from './media/export.svg';
import ImportIcon from './media/import.svg';
import PasteIcon from './media/paste.svg';
import ClearIcon from './media/clear.svg';

class Board extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            content: "",
            translation: ""
        }
    }

    handleChange = (e) => {
        const content = e.target.value;
        const translation = latinize(e.target.value);
        const textarea = document.querySelector('#Output');

        textarea.scrollTop = textarea.scrollHeight;

        this.setState({
            content: content,
            translation: translation
        });
    }

    upload() {
    }

    download() {
    }

    onCopy() {
        console.log("Here must be a message box")
    }

    clear() {
    }

    render() {
        return (
            <div className="Board">
                <div className="Board-Panel">
                    <div className="Board-Panel-Editor">
                        <textarea className="Board-Editor-TextArea"
                                  id="input"
                                  placeholder="Введите сюда текст на кириллице"
                                  onChange={this.handleChange} />
                    </div>
                    <div className="Board-Panel-Separator" />
                    <div className="Board-Panel-Toolbar">
                        <div className="Board-Panel-ButtonGroup">
                            <button className="Board-Panel-Button">
                                <img className="Icon" src={PasteIcon} />
                            </button>
                            <button className="Board-Panel-Button">
                                <img className="Icon" src={ImportIcon} />
                            </button>
                            <button className="Board-Panel-Button">
                                <img className="Icon" src={ClearIcon} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Board-Space" />
                <div className="Board-Panel">
                    <div className="Board-Panel-Editor">
                        <textarea className="Board-Editor-TextArea"
                                  id="Output"
                                  value={this.state.translation} />
                    </div>
                    <div className="Board-Panel-Separator" />
                    <div className="Board-Panel-Toolbar">
                        <div className="Board-Panel-ButtonGroup">
                            <button className="Board-Panel-Button">
                                <img className="Icon" src={ExportIcon} />
                            </button>
                            <CopyToClipboard onCopy={this.onCopy} text={this.state.translation}>
                                <button className="Board-Panel-Button">
                                    <img className="Icon" src={CopyIcon} />
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;
