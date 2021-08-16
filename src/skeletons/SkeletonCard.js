import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.scss';
import Shimmer from './Shimmer';

export default function SkeletonCard(props) {
  return (
    <div className={`skeleton-wrapper ${props.className}`}>
      <div className="skeleton-card">
        <SkeletonElement type="image" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}
