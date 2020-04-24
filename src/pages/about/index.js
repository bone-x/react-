import React, { Component } from 'react';
// import Hoc from '../../utils/hoc';
import { Table } from 'antd';
import { connect } from 'dva';
@connect(({ aboutpage, loading }) => ({
  aboutpage,
  loading: loading.effects['aboutpage/getData'],
}))
class About extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'aboutpage/getData',
    });
  }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '住址',
        dataIndex: 'username',
        key: 'username',
      },
    ];
    return (
      <div>
        {this.props.aboutpage.data &&
          this.props.aboutpage.data.map((item, index) => <div key={item.id}>{item.name}</div>)}
        <Table
          dataSource={this.props.aboutpage.data}
          columns={columns}
          loading={this.props.loading}
          rowKey="id"
        />
        ;
      </div>
    );
  }
}
export default About;
// export default connect(({ aboutpage, loading }) => ({
//   aboutpage,
//   loading: loading.effects['aboutpage/getData'],
// }))(About);
// const About1 = Hoc(About);

// export default class AboutPage extends Component {

//   render() {
//     const obj={
//         a:1,
//         b:2
//     }
//     return <About1 {...obj}></About1>;
//   }
// }
