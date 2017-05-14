import React from 'react';
import { Button } from '../styled';

export default () => (
  <div className="filter-row-sizes">
    <span className="filter-row-title">size</span>
    <div className="filter-row-values">
      <Button>36</Button>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button>40</Button>
      <Button isActive>41</Button>
      <Button>42</Button>
    </div>
  </div>
);
