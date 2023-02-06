import { CopyOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Space, Tooltip } from 'antd';
import styles from './index.module.less';
import { ActionButtonProps } from './typings';

const defaultBtnProps: ButtonProps = {
  size: 'small',
  ghost: false,
  type: 'text',
  className: 'value-actions-btn',
};

const ActionButtons = <RecordType extends {}>({
  showEdit = true,
  showDelete = true,
  showDuplicate = false,
  onEdit,
  onDelete,
  onDuplicate,
  record,
  editText,
  deleteText,
  duplicateText,
  editTooltipText = 'Edit',
  deleteTooltipText = 'Delete',
  duplicateTooltipText = 'Duplicate',
  editButtonProps,
  deleteButtonProps,
  duplicateButtonProps,
}: ActionButtonProps<RecordType>) => (
  <Space className="actions">
    {showEdit && (
      <Tooltip placement="bottom" title={editTooltipText}>
        <Button {...defaultBtnProps} {...editButtonProps} onClick={() => onEdit && onEdit(record)}>
          {!editText ? <EditOutlined className={styles.btnicon} /> : editText}
        </Button>
      </Tooltip>
    )}
    {showDuplicate && (
      <Tooltip placement="bottom" title={duplicateTooltipText}>
        <Button
          {...defaultBtnProps}
          {...duplicateButtonProps}
          onClick={() => onDuplicate && onDuplicate(record)}
        >
          {!duplicateText ? <CopyOutlined className={styles.btnicon} /> : duplicateText}
        </Button>
      </Tooltip>
    )}
    {showDelete && (
      <Tooltip placement="bottom" title={deleteTooltipText}>
        <Button
          {...defaultBtnProps}
          {...deleteButtonProps}
          onClick={() => onDelete && onDelete(record)}
        >
          {!deleteText ? <DeleteOutlined className={styles.btnicon} /> : deleteText}
        </Button>
      </Tooltip>
    )}
  </Space>
);

export default ActionButtons;
