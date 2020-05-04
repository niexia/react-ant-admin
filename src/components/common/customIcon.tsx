import React from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  FormOutlined,
  BarsOutlined,
  ProfileOutlined,
  AlertOutlined,
  SettingOutlined,
  RocketOutlined
} from '@ant-design/icons';

const iconMap: {[key: string]: any} = {
  HomeOutlined: <HomeOutlined />,
  AppstoreOutlined:<AppstoreOutlined />,
  BarsOutlined: <BarsOutlined />,
  FormOutlined: <FormOutlined />,
  ProfileOutlined: <ProfileOutlined />,
  AlertOutlined: <AlertOutlined />,
  SettingOutlined: <SettingOutlined />,
  RocketOutlined: <RocketOutlined />
};

type CustomIconProps = {
  icon: string
}

function CustomIcon(props: CustomIconProps){
  const { icon } = props;
  return iconMap[icon] ? iconMap[icon] : iconMap['RocketOutlined'];
}

export default CustomIcon;