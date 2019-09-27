import React, { Component } from 'react';
import { NewsWrapper } from "./style"
export default class News extends Component {
    render() {
        return (
            <NewsWrapper>
                <div className="news">
                    <img src="http://charleskeith.oss-cn-shanghai.aliyuncs.com/test/20190919/355a0bfde8ca4ba38d683c8d4db5cdb6.jpg"></img>
                </div>
                <div className="ban">
                    <ul>
                        <li>
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" />
                        </li>
                        <li>
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" />
                        </li>
                        <li>
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" />
                        </li>
                        <li>
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" />
                        </li>
                        <li>
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" />
                        </li>
                        <li>
                            <img src="https://charleskeith.oss-cn-shanghai.aliyuncs.com/20190926d24af38f-0cea-4a56-846b-fcdcfbd4fe0e-large.jpg" />
                        </li>
                    </ul>
                    <div className="sumer">
                        <div className="sumer_span">
                            <span>秋冬新款</span>
                        </div>
                        <div>
                            <span>
                                <img src="http://charleskeith.oss-cn-shanghai.aliyuncs.com/test/20190926/f636429bff90427db88530a3e5cce05b.jpg"></img>
                            </span>
                        </div>
                    </div>
                </div>
            </NewsWrapper>
        );
    }
}
