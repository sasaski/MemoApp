import React from 'react';
// oneOf は指定された値のいずれかであることをチェックするもの
import { number, string, oneOf } from 'prop-types';
// アイコン読み込み
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
// アイコン読み取り検知用ライブラリ
import { useFonts } from '@use-expo/font';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function Icon(props) {
  // fontが読み込まれているか判定する処理。読み込まれていれば true を返却する。
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  // fontが読み込まれていなかったら、NULLを返却する
  if (!fontLoaded) {
    return null;
  }
  // Android表示でのCircleボタンの表示が少しずれていたため、暫定的にlineHeightを-1にすることで対応
  return <CustomIcon name={name} size={size} color={color} style={{ lineHeight: size - 1 }} />;
}

Icon.propTypes = {
  // 配列に指定された文字だけしか受け付けない
  name: oneOf(['delete', 'plus', 'pencil', 'check']).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: '#000000',
};
