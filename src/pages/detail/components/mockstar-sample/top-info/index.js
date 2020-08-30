import React, { Component } from 'react';
import { Alert, Card, Descriptions, Divider } from 'antd';

import { NETWORK_CASE } from '../../../../../datas/data-network';

import './index.less';

export default class MockStarSampleTopInfo extends Component {

  render() {
    const { currentNetwork, mockStarInfo } = this.props;

    return (
      <div className="page-detail-mockstar-sample-top-info">
        <Card>

          {
            currentNetwork.networkCase === NETWORK_CASE.MATCHED_NOT_MOCK ? (
              <>
                <Alert message={`已在 ${mockStarInfo.server} 成功匹配，但是当前结果返回并不是 MockStar 的桩数据，请确定是否有效设置了代理！`}
                       type="warning" />
                <Alert message={`whistle 代理设置： /(.*)${currentNetwork.mockerItem.config.route}(.*)/ 127.0.0.1:9527`}
                       type="warning" />
                <Divider />
              </>
            ) : null
          }


          <Descriptions size="small" column={1}>
            <Descriptions.Item label="请求地址">{currentNetwork.request.url}</Descriptions.Item>

            {
              currentNetwork.mockerItem ? (
                <>
                  <Descriptions.Item label="请求路由">{currentNetwork.mockerItem.config.route}</Descriptions.Item>
                  <Descriptions.Item label="文件路径">{currentNetwork.mockerItem.basePath}</Descriptions.Item>
                  <Descriptions.Item label="桩对象">{currentNetwork.mockerItem.name}</Descriptions.Item>
                </>
              ) : null
            }

          </Descriptions>
        </Card>
      </div>
    );
  }
}
