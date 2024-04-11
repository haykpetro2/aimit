import Image from 'next/image';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ images, setImage, onDragEnd, t }) => {
  return (
    <section className={styles['step-section']}>
      <div className="container">
        <div className={`${styles['section-headline']}`}>
          <h3>{t('moulkCrmStepText')}</h3>
        </div>
        <div className={styles['section-mainpanel']}>
          <div className={styles['listing-header']}>
            <Image src="/images/uploads/listing_header.png" layout="fill" />
          </div>
          <div className={styles['images-listing']}>
            <div className={styles['images-list']}>
              <div className={styles['list-image']}>
                <Image layout="fill" src="/images/uploads/image_list1.png" />
              </div>
              <div className={styles['list-image']}>
                <Image layout="fill" src="/images/uploads/image_list8.png" />
              </div>
              <div className={styles['list-image']}>
                <Image layout="fill" src="/images/uploads/image_list11.png" />
              </div>
              <div className={styles['list-image']}>
                <Image layout="fill" src="/images/uploads/image_list15.png" />
              </div>
            </div>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, images, setImage)}>
              {Object.entries(images).map(([id, column]) => {
                return (
                  <div key={id} className={styles['droppable-list']}>
                    <Droppable droppableId={id} key={id}>
                      {(provided) => {
                        return (
                          <div
                            className={styles['drag-overlay']}
                            key={id}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {(provided) => {
                                    return (
                                      <div
                                        key={item.id}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <div className={styles['list-image']}>
                                          <Image src={item.image} layout="fill" />
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                );
              })}
            </DragDropContext>
            <div className={styles['add-order']}>
              <button type="button">{t('addOrder')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  images: PropTypes.object,
  setImage: PropTypes.func,
  onDragEnd: PropTypes.func,
  t: PropTypes.func,
};
