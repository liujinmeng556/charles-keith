import React, { Component } from 'react';
import { NewsWrapper } from "./style"
import { connect } from "react-redux"
import { WEEK_ACTION_ASYNC } from "@actions/week"

class News extends Component {

    render() {
        let { charleskeiths } = this.props
        console.log(charleskeiths)
        return (
            <NewsWrapper>
                <div className="news">
                    {<img src="http://charleskeith.oss-cn-shanghai.aliyuncs.com/test/20190919/355a0bfde8ca4ba38d683c8d4db5cdb6.jpg" alt=""></img>}
                </div>
                <div className="ban">
                    <ul>
                        <li className="ban_li">
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" alt="" />
                        </li>
                        <li className="ban_li">
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" alt="" />
                        </li>
                        <li className="ban_li">
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" alt="" />
                        </li>
                        <li className="ban_li">
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" alt="" />
                        </li>
                        <li className="ban_li">
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" alt="" />
                        </li>
                        <li className="ban_li">
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" alt="" />
                        </li>
                    </ul>
                    <div className="sumer">
                        <div className="sumer_span">
                            <span >秋冬新款</span>
                        </div>
                        <div>
                            <span className="sumer_im">
                                <img src="http://charleskeith.oss-cn-shanghai.aliyuncs.com/test/20190926/f636429bff90427db88530a3e5cce05b.jpg" alt=""></img>
                            </span>
                        </div>
                    </div>
                    <div className="sumer">
                        <div className="sumer_span">
                            <span >秋冬新款</span>
                        </div>
                        <div>
                            <span className="sumer_im">
                                <img src="http://charleskeith.oss-cn-shanghai.aliyuncs.com/test/20190729/d9240ceed0ae4bae900175b5c0b6e1e6.jpg" alt=""></img>
                            </span>
                        </div>
                    </div>
                </div>
            </NewsWrapper>
        );
    }
    componentDidMount() {
        this.props.handleAsyncWeek()
    }
}

const mapStateToProps = (state) => ({
    charleskeiths: state.goods.charleskeiths
})
const mapDisPathToProps = (dispatch) => ({
    handleAsyncWeek() {
        dispatch(WEEK_ACTION_ASYNC())
    }
})

export default connect(mapStateToProps, mapDisPathToProps)(News)


