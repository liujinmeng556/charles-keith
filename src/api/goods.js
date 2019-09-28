// 头部导航接口     https://www.charleskeith.cn/api/charleskeith/v2/navigation/list/menu?AppId=charleskeith&Timestamp=20190928090302&Sign=7E4448FA6D79A430DDD602E552C1285B

// 列表四栏   https://www.charleskeith.cn/api/charleskeith/v2/navigation/menu/5?AppId=charleskeith&Timestamp=20190928090303&Sign=14DAE9DA5AACE74A97A6E91EC5B3A843

//列表   https://www.charleskeith.cn/api/charleskeith/v2/menu/main/h5?AppId=charleskeith&Timestamp=20190928090541&Sign=393364135108D378D5070CB2D63ADCB4

import http from "@utils/http"

export const charleskeiths = () => http.get("/api/charleskeith/v2/navigation/menu/5", {
    AppId: "charleskeith",
    Timestamp: 20190928090303,
    Sign: "14DAE9DA5AACE74A97A6E91EC5B3A843"
}) 