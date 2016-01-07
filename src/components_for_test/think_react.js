import React from 'react';
import ReactDOM from 'react-dom';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: props.initialFilterText,
      inStockOnly: props.initialInStockOnly
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  initialFilterText: React.PropTypes.string,
  initialInStockOnly: React.PropTypes.bool
};
FilterableProductTable.defaultProps = {
  initialFilterText: '',
  initialInStockOnly: false
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search... "
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow product={product} key={product.name}/>)
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>{this.props.product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default FilterableProductTable;