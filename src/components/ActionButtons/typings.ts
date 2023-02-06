import { ButtonProps } from 'antd';

export interface ActionButtonProps<RecordType> {
  showEdit?: boolean;
  showDelete?: boolean;
  showDuplicate?: boolean;
  record?: RecordType;
  onEdit?: (record?: RecordType) => void;
  onDelete?: (record?: RecordType) => void;
  onDuplicate?: (record?: RecordType) => void;
  duplicateText?: string;
  editText?: string;
  deleteText?: string;
  editTooltipText?: string;
  deleteTooltipText?: string;
  duplicateTooltipText?: string;
  editButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  duplicateButtonProps?: ButtonProps;
}
