import './Board.css';
import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ScrollSync, ScrollSyncPane} from "react-scroll-sync";
import ReactTooltip from 'react-tooltip';
import { saveAs } from 'file-saver';
import latinize from 'klukva-core';
import CopyIcon from './media/copy.svg';
import ExportIcon from './media/export.svg';
import ClearIcon from './media/clear.svg';

const modes = ["klukva", "modern", "jakovlev-1", "jakovlev-2", "jakovlev-3"]

class Board extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            content: "",
            translation: "",
            mode: 0,
            characters: 0,
            limit: 10000
        }
    }

    handleChange = (e) => {
        const content = e.target.value;
        const translation = latinize(e.target.value, modes[this.state.mode]);
        const characters = e.target.value.length;

        document.querySelector('#Output').scrollTop = document.querySelector('#Output').scrollHeight;

        this.setState({
            content: content,
            translation: translation,
            characters: characters
        });
    }

    clear = (e) => {
        document.querySelector('#Input').value = "";
        document.querySelector('#Output').value = "";
    }

    upload = (e) => {

    }

    export = (e) => {
        var blob = new Blob([this.state.translation], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "translation.txt");
    }

    onCopy = (e) => {
        console.log("Here must be a message box")
    }

    changeTranslator = (e) => {
        const mode = (this.state.mode < 4 ) ? this.state.mode + 1 : 0;
        this.setState({
            mode: mode,
            translation: latinize(this.state.content, modes[mode])
        })
    }

    render() {
        return (
            <ScrollSync>
                <div className="Board">
                    <ReactTooltip className="Board-Tooltip" effect="solid" backgroundColor="#040c1d" arrowColor="transparent" />
                    <div className="Board-Panel">
                        <div className="Board-Panel-Editor">
                            <ScrollSyncPane>
                            <textarea className="Board-Editor-TextArea"
                                      id="Input"
                                      placeholder="Введите сюда текст на кириллице"
                                      maxlength={this.state.limit}
                                      onChange={this.handleChange} />
                            </ScrollSyncPane>
                        </div>
                        <div className="Board-Panel-Separator" />
                        <div className="Board-Panel-Toolbar">
                            <div className="Board-Panel-Counter">
                                <p className="Board-Panel-Counter-Label">{this.state.characters} / {this.state.limit}</p>
                            </div>
                            <div className="Board-Panel-ButtonGroup">
                                <button className="Board-Panel-Button" data-tip="Oçistitj formu" onClick={this.clear}>
                                    <img className="Icon" src={ClearIcon} alt="clear" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="Board-Space" />
                    <div className="Board-Panel">
                        <div className="Board-Panel-Editor">
                            <ScrollSyncPane>
                            <textarea className="Board-Editor-TextArea"
                                      id="Output"
                                      value={this.state.translation} />
                            </ScrollSyncPane>
                        </div>
                        <div className="Board-Panel-Separator" />
                        <div className="Board-Panel-Toolbar">
                            <div className="Board-Panel-Switcher">
                                <p className="Board-Panel-Switcher-Label">Reżim:</p>
                                <button className="Board-Panel-Switcher-Button" onClick={this.changeTranslator}>{modes[this.state.mode]}</button>
                            </div>
                            <div className="Board-Panel-ButtonGroup">
                                <button className="Board-Panel-Button" data-tip="Soxranitj perevod" onClick={this.export}>
                                    <img className="Icon" src={ExportIcon} alt="export" />
                                </button>
                                <CopyToClipboard onCopy={this.onCopy} text={this.state.translation}>
                                    <button className="Board-Panel-Button" data-tip="Skopirovatj perevod">
                                        <img className="Icon" src={CopyIcon} alt="copy" />
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollSync>
        )
    }
}

export default Board;
