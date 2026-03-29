import styles from './Field.module.scss';

const Field = (props) => {
  const { className = '',
    id,
    label,
    type = 'text',
    onInput,
    value,
    error,
    ref,
  } = props;
  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        className={`${styles.input}${error ? styles.isInvalid : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        onInput={onInput}
        value={value}
        ref={ref}
      />
      {error && (
        <span className={styles.error} title={error}>{error}</span>
      )}
    </div>
  );
}

export default Field;
