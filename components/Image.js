// @flow
import * as React from 'react';
import classNames from 'classnames';

type ImageProps = {|
  src: string,
  width: number,
  height: number,
  circle?: boolean,
  float?: 'left' | 'right',
|};

class Image extends React.PureComponent<ImageProps> {
  render() {
    const { src, width, height, circle, float } = this.props;
    return (
      <React.Fragment>
        <img
          src={src}
          width={width}
          height={height}
          className={classNames({
            circle,
            'float-left': float === 'left',
            'float-right': float === 'right',
          })}
        />
        <style jsx>{`
          .circle {
            border-radius: 50%;
          }
          .float-left {
            float: left;
          }
          .float-right {
            float: right;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Image;
